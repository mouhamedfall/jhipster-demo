import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MycommerceItemModule } from './item/item.module';
import { MycommerceArticleModule } from './article/article.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MycommerceItemModule,
        MycommerceArticleModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MycommerceEntityModule {}
