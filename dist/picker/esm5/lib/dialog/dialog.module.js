/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * dialog.module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { OWL_DIALOG_SCROLL_STRATEGY_PROVIDER, OwlDialogService } from './dialog.service';
import { OwlDialogContainerComponent } from './dialog-container.component';
var OwlDialogModule = /** @class */ (function () {
    function OwlDialogModule() {
    }
    OwlDialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, A11yModule, OverlayModule, PortalModule],
                    exports: [],
                    declarations: [
                        OwlDialogContainerComponent,
                    ],
                    providers: [
                        OWL_DIALOG_SCROLL_STRATEGY_PROVIDER,
                        OwlDialogService,
                    ],
                    entryComponents: [
                        OwlDialogContainerComponent,
                    ]
                },] }
    ];
    return OwlDialogModule;
}());
export { OwlDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBpY2stZGF0ZXRpbWUvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nL2RpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTNFO0lBQUE7SUFlQSxDQUFDOztnQkFmQSxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO29CQUNoRSxPQUFPLEVBQUUsRUFBRTtvQkFDWCxZQUFZLEVBQUU7d0JBQ1YsMkJBQTJCO3FCQUM5QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1AsbUNBQW1DO3dCQUNuQyxnQkFBZ0I7cUJBQ25CO29CQUNELGVBQWUsRUFBRTt3QkFDYiwyQkFBMkI7cUJBQzlCO2lCQUNKOztJQUVELHNCQUFDO0NBQUEsQUFmRCxJQWVDO1NBRFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBkaWFsb2cubW9kdWxlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQTExeU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IE9XTF9ESUFMT0dfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSLCBPd2xEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9kaWFsb2cuc2VydmljZSc7XHJcbmltcG9ydCB7IE93bERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEExMXlNb2R1bGUsIE92ZXJsYXlNb2R1bGUsIFBvcnRhbE1vZHVsZV0sXHJcbiAgICBleHBvcnRzOiBbXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE93bERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBPV0xfRElBTE9HX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUixcclxuICAgICAgICBPd2xEaWFsb2dTZXJ2aWNlLFxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICAgIE93bERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE93bERpYWxvZ01vZHVsZSB7XHJcbn1cclxuIl19