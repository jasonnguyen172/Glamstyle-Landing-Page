// import { environment } from '../../../environments/environment';

// export const BASE_URL = environment.apiUrl;
// export const HOST = environment.hostRedirect;
// const pathPrefix = `api`;
// const usersPrefix = `users/`;
// const userPrefix = `user/`;
// const serviceFB = `oauth/facebook/`;
// const serviceGG = `oauth/google/`;
// const loginSuffix = `login`;
// const signupSuffix = `signup`;
// const branch = `branches`;
// const branchId = `branchId`;
// const services = `services`;
// const booking = `bookings`;
// const coupon = `coupons`;
// const feedbacks = `feedbacks`;
// const slug = `slug`;
// const notify = `notices`;
// const version = `v2`;
// export const API = {
//   API_OAUTH: {
//     API_OAUTH_LOGIN: `${BASE_URL}/${pathPrefix}/${usersPrefix}login`,
//     API_OAUTH_CHANGE_PW: `${BASE_URL}/${pathPrefix}/${userPrefix}password`,
//     API_OAUTH_FORGET_PW: `${BASE_URL}/${pathPrefix}/${usersPrefix}email/verify/send`,
//     API_OAUTH_LOGOUT: `${BASE_URL}/${pathPrefix}/${userPrefix}logout`,
//     API_GET_USER: `${BASE_URL}/${pathPrefix}/user`,
//     API_GET_USER_BY_ID: `${BASE_URL}/${pathPrefix}/${usersPrefix}`,
//     API_OAUTH_SIGNUP: `${BASE_URL}/${pathPrefix}/${usersPrefix}signup`,
//     API_OAUTH_LOGIN_FB: `${BASE_URL}/${pathPrefix}/${serviceFB}${loginSuffix}`,
//     API_OAUTH_LOGIN_GG: `${BASE_URL}/${pathPrefix}/${serviceGG}${loginSuffix}`,
//     API_OAUTH_SIGNUP_FB: `${BASE_URL}/${pathPrefix}/${serviceFB}${loginSuffix}`,
//     API_OAUTH_SIGNUP_GG: `${BASE_URL}/${pathPrefix}/${serviceGG}${loginSuffix}`,
//     API_OAUTH_PHONE_VERIFY: `${BASE_URL}/${pathPrefix}/${userPrefix}verification/mobile?code=`
//   },
//   API_BRANCH: {
//     API_GET_BRANCHS: `${BASE_URL}/${pathPrefix}/${branch}`,
//     API_GET_BRANCH_BY_SLUG: `${BASE_URL}/${pathPrefix}/${branch}/${slug}/branchSlug`,
//     API_GET_BRANCH_BY_ID: `${BASE_URL}/${pathPrefix}/${branch}/branchId`,
//     API_GET_SERVICES_BY_BRANCH_ID: `${BASE_URL}/${pathPrefix}/${branch}/${branchId}/services`,
//     API_GET_GALLERY_BY_BRANCH_ID: `${BASE_URL}/${pathPrefix}/${branch}/${branchId}/images?type=gallery`,
//     API_GET_BANNER_BY_BRANCH_ID: `${BASE_URL}/${pathPrefix}/${branch}/${branchId}/images?type=banners`,
//     API_GET_AVATAR_BY_BRANCH_ID: `${BASE_URL}/${pathPrefix}/${branch}/${branchId}/images?type=avatar`,
//     API_GET_SLOTS_OF_SERVICE: `${BASE_URL}/${pathPrefix}/${services}`,
//     API_GET_BRANCH_CATEGORY_CONFIGURATIONS: `${BASE_URL}/${pathPrefix}/${branch}/${branchId}/categoryconfigurations`,
//     API_GET_BRANCHES_BY_SERVICE: `${BASE_URL}/${pathPrefix}/${branch}?serviceName=__serviceName`,
//     API_GET_SERVICES_BY_BRANCH_ID_V2: `${BASE_URL}/${pathPrefix}/v2/${branch}/__branchId/${services}`,
//   },
//   API_HOST: {
//     API_CREATE_HOST: `${BASE_URL}/${pathPrefix}/${userPrefix}${branch}`,
//     API_VERIFY_USER: `${BASE_URL}/${pathPrefix}/${userPrefix}sms/verify`,
//     API_RESEND_OTP: `${BASE_URL}/${pathPrefix}/${userPrefix}sms/verify/send`
//   },
//   API_BOOKING: {
//     API_BOOKING: `${BASE_URL}/${pathPrefix}/${booking}`,
//     API_BOOKING_MANY_SERVICE: `${BASE_URL}/${pathPrefix}/${services}/${booking}`,
//     API_BOOKING_CHECK_COUPON: `${BASE_URL}/${pathPrefix}/${booking}`,
//     API_USER_BOOKING: `${BASE_URL}/${pathPrefix}/${userPrefix}${booking}`,
//     API_CANAEL_BOOKING: `${BASE_URL}/${pathPrefix}/${booking}/bookingId/cancel`,
//     API_USER_LATEST_BOOKING_OF_BRANCH: `${BASE_URL}/${pathPrefix}/${version}/${booking}?action=getlatestbooking&userID=__userId&branchID=__branchId`,
//   },
//   API_COUPON: {
//     API_CHECK_COUPON: `${BASE_URL}/${pathPrefix}/${coupon}/check`
//   },
//   API_SERVICE: {
//     API_SERACH_SERVICE: `${BASE_URL}/${pathPrefix}/${services}/search`,
//     API_GET_SERVICE_BY_ID: `${BASE_URL}/${pathPrefix}/${services}/serviceId`
//   },
//   API_FEEDBACK: {
//     API_POST_FEEDBACK: `${BASE_URL}/${pathPrefix}/${userPrefix}${services}/serviceId/${feedbacks}`,
//     API_PATCH_FEEDBACK_BRANCHS: `${BASE_URL}/${pathPrefix}/${branch}/branchId/${feedbacks}`,
//     API_PATCH_FEEDBACK_BOOKING: `${BASE_URL}/${pathPrefix}/bookings/bookingId/ratings`,
//     API_GET_FEEDBACK_BRANCHS: `${BASE_URL}/${pathPrefix}/${branch}/branchId/${feedbacks}`,
//     API_GET_FEEDBACK_REPLY: `${BASE_URL}/${pathPrefix}/${feedbacks}/feedbackId`,
//     API_GET_ALL_FEEDBACK_BY_USER: `${BASE_URL}/${pathPrefix}/${userPrefix}feedbacks`,
//     // API FEEDBACK VERSION 2
//     API_GET_FEEDBACK_BY_BRANCHID_V2: `${BASE_URL}/${pathPrefix}/${feedbacks}?branchID=__branchId&offset=__offset&limit=__limit&orderBy=__orderBy`,
//     API_POST_FEEDBACK_V2: `${BASE_URL}/${pathPrefix}/${feedbacks}`,
//     API_PUT_FEEDBACK_V2: `${BASE_URL}/${pathPrefix}/${feedbacks}?feedbackID=__feedbackId`,
//     API_POST_FEEDBACK_BY_REFERENCE_V2: `${BASE_URL}/${pathPrefix}/${feedbacks}?branchID=__branchId&ratingInvited=__ratingInvited`,
//     API_POST_FEEDBACK_FOR_BOOKING_V2: `${BASE_URL}/${pathPrefix}/${feedbacks}?bookingId=__bookingId`,
//   },
//   API_NOTIFICATION: {
//     API_PATCHTOKEN: `${BASE_URL}/${pathPrefix}/${userPrefix}${notify}/key`,
//     API_GET_NOTIFY: `${BASE_URL}/${pathPrefix}/${userPrefix}${notify}`
//   },
//   API_PUBLIC:{
//     API_GET_SERVICES : `${BASE_URL}/${pathPrefix}/defaultservices`,
//     API_GET_LOCATIONS : `${BASE_URL}/${pathPrefix}/defaultlocations`,
//   }
// };
