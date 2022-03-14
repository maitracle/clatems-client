/// <reference types="react-scripts" />

import { JitsuClient } from '@jitsu/sdk-js';


declare global {
  interface Window {
    jitsu?: JitsuClient;
    IMP: any;
  }
}
