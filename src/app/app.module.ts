// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BasicTypesComponent } from './basic-types/basic-types.component';
import { ArrayTupleComponent } from './array-tuple/array-tuple.component';
import { EnumComponent } from './enum';
import { AnyUnknownComponent } from './any-unknown.component';
import { InterfaceComponent } from './interface.component';
import { FunctionTypesComponent } from './function-types.component';
import { TypeAliasComponent } from './type-alias.component';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTypesComponent,
    ArrayTupleComponent,
    EnumComponent,
    AnyUnknownComponent,
    InterfaceComponent,
    FunctionTypesComponent,
    TypeAliasComponent,
    PostsComponent // <- Make sure there is a comma here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
