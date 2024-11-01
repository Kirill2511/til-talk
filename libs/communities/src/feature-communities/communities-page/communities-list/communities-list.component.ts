import { Component, inject } from '@angular/core';
import { CommunitiesListItemComponent } from './communities-list-item/communities-list-item.component';
import { CommunitiesListFiltersComponent } from './communities-list-filters/communities-list-filters.component';
import { Store } from '@ngrx/store';
import { selectFilteredCommunity } from '../../../data';

@Component({
  selector: 'tt-communities-list',
  standalone: true,
  imports: [CommunitiesListItemComponent, CommunitiesListFiltersComponent],
  templateUrl: './communities-list.component.html',
  styleUrl: './communities-list.component.scss',
})
export class CommunitiesListComponent {
  store = inject(Store);
  communities = this.store.selectSignal(selectFilteredCommunity);
}