import { decamelizeKeys } from 'humps';


export enum UserActivities {
  Click = 'click',
  PageView = 'page_view',
  AdClick = 'ad_click'
}

export type UserActionPropertyType = {
  [key: string]: string | number | UserActionPropertyType;
}

const logUserActivity = (action: UserActivities, properties: object) => {
  window.jitsu?.track(action, decamelizeKeys(properties));
};


export const logPageView = (properties: UserActionPropertyType = {}) => {
  logUserActivity(UserActivities.PageView, properties);
};

export const logClick = (properties: UserActionPropertyType = {}) => {
  logUserActivity(UserActivities.Click, properties);
};

export const logAdClick = (properties: UserActionPropertyType = {}) => {
  logUserActivity(UserActivities.AdClick, properties);
};

export const logClickWithFunction = <CallbackArgs, CallbackReturn>(properties: UserActionPropertyType = {}) => {
  return (func: (params: CallbackArgs) => CallbackReturn) => {
    return (params: CallbackArgs) => {
      logClick(properties);
      return func(params);
    };
  };
};
