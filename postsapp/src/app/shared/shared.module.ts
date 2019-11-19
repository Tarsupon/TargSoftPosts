import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GridModule
  ],
  exports: [
    GridModule
  ]
})
export class SharedModule { }
