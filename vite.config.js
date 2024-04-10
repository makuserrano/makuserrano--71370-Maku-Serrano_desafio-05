import {resolve} from 'node:path';

export default {
 build: {
    emptyOurDir: true,
    rollupOptions:{
        input:{
            mariokart: resolve('pages/mariokart.html'),
            mortalkombat: resolve('pages/mortalkombat.html'),

        }
    }
 }
};

