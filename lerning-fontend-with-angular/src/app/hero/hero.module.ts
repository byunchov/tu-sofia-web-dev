import { NgModule } from '@angular/core';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './services/hero.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeroListComponent],
  imports: [
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ChipModule,
    BrowserModule,
  ],
  providers: [HeroService],
  bootstrap: [],
})
export class HeroModule {}
