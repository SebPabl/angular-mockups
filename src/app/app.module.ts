import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"angular-mockups","appId":"1:792539698557:web:f7c8e1b8f1ba508dda2814","storageBucket":"angular-mockups.appspot.com","apiKey":"AIzaSyCR1X7AOpUgeH1ie_HCdlUZTtey_UA9T8g","authDomain":"angular-mockups.firebaseapp.com","messagingSenderId":"792539698557"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent, CreateUserComponent]
})
export class AppModule { }
