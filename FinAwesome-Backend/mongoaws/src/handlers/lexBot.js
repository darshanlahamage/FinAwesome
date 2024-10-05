const connectDatabase = require('../database/db');
const StoreVisit = require('../models/storeVisit');
const OfferAlert = require('../models/offerAlert');

// Validation function to ensure the slots are filled correctly
function validateSlots(intentName, slots) {
    if (intentName === 'ScheduleStoreVisit') {
        const { shopName, address, date, time } = slots;
        if (!shopName) return { isValid: false, violatedSlot: 'shopName' };
        if (!address) return { isValid: false, violatedSlot: 'address' };
        if (!date) return { isValid: false, violatedSlot: 'date' };
        if (!time) return { isValid: false, violatedSlot: 'time' };
    } else if (intentName === 'offerAlert') {
        const { category, product, discount, expiryDate } = slots;
        if (!category) return { isValid: false, violatedSlot: 'category' };
        if (!product) return { isValid: false, violatedSlot: 'product' };
        if (!discount) return { isValid: false, violatedSlot: 'discount' };
        if (!expiryDate) return { isValid: false, violatedSlot: 'expiryDate' };
    }

    return { isValid: true };
}

module.exports.handler = async (event, context) => {
    context.callbackWaitForEmptyEventLoop = false;
    console.log('Received event:', JSON.stringify(event));
    await connectDatabase();

    const intentName = event.sessionState.intent.name;
    const email = event.sessionState.sessionAttributes.email || "lahamagedarshan61@gmail.com";
    const slots = event.sessionState.intent.slots;
    const invocationSource = event.invocationSource;

    let responseMessage = 'Sorry, I could not fulfill your request, please try again.';

    try {
        // Validate slots during the dialog
        if (invocationSource === 'DialogCodeHook') {
            const validationResult = validateSlots(intentName, slots);
            if (!validationResult.isValid) {
                return {
                    sessionState: {
                        dialogAction: {
                            slotToElicit: validationResult.violatedSlot,
                            type: 'ElicitSlot',
                        },
                        intent: {
                            name: intentName,
                            slots: slots,
                        },
                    },
                };
            }

            return {
                sessionState: {
                    dialogAction: {
                        type: 'Delegate',
                    },
                    intent: {
                        name: intentName,
                        slots: slots,
                    },
                },
            };
        }

        // Fulfillment
        if (invocationSource === 'FulfillmentCodeHook') {
            if (intentName === 'ScheduleStoreVisit') {
                const { shopName, address, date, time } = slots;
                const storeVisit = new StoreVisit({
                    email,
                    shopName: shopName.value.originalValue,
                    address: address.value.originalValue,
                    date: date.value.originalValue,
                    time: time.value.originalValue,
                });
                await storeVisit.save();
                responseMessage = `Store visit for ${shopName.value.originalValue} on ${date.value.originalValue} at ${time.value.originalValue} is scheduled.`;
            } else if (intentName === 'offerAlert') {
                const { category, product, discount, expiryDate } = slots;
                const offerAlert = new OfferAlert({
                    email,
                    category: category.value.originalValue,
                    product: product.value.originalValue,
                    discount: discount.value.originalValue,
                    expiryDate: expiryDate.value.originalValue,
                });
                await offerAlert.save();
                responseMessage = `Your offer alert is set for ${category.value.originalValue} on ${product.value.originalValue} at ${discount.value.originalValue}% discount until ${expiryDate.value.originalValue}.`;
            }

            return {
                sessionState: {
                    dialogAction: {
                        type: 'Close',
                    },
                    intent: {
                        name: intentName,
                        slots: slots,
                        state: 'Fulfilled',
                    },
                },
                messages: [
                    {
                        contentType: 'PlainText',
                        content: responseMessage,
                    },
                ],
            };
        }
    } catch (err) {
        console.log('Error ----- ', err.message);
        responseMessage = 'Sorry, there was an error processing your request';
    }

    return {
        sessionState: {
            dialogAction: {
                type: 'Close',
            },
            intent: {
                name: intentName,
                slots: slots,
                state: 'Failed',
            },
        },
        messages: [
            {
                contentType: 'PlainText',
                content: responseMessage,
            },
        ],
    };
};