import apiActiontypes from "./action-types"

export const apiProfile = (payload) => ({
    type : apiActiontypes.PROFILE,
    payload,
});