import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { ItemComponent } from './item.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemPopupComponent } from './item-dialog.component';
import { ItemDeletePopupComponent } from './item-delete-dialog.component';

import { Principal } from '../../shared';

export const itemRoute: Routes = [
    {
        path: 'item',
        component: ItemComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mycommerceApp.item.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'item/:id',
        component: ItemDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mycommerceApp.item.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const itemPopupRoute: Routes = [
    {
        path: 'item-new',
        component: ItemPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mycommerceApp.item.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'item/:id/edit',
        component: ItemPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mycommerceApp.item.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'item/:id/delete',
        component: ItemDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mycommerceApp.item.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
