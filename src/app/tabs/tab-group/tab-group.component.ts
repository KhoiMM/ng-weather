import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.css',
})
export class TabGroupComponent {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Output() removeTabEvent = new EventEmitter<number>();

  ngOnInit(): void {
    setTimeout(() => {
      if (this.tabs.length) {
        const activeTabs = this.tabs.filter((tab) => tab.active);

        if (activeTabs.length === 0) {
          this.selectTab(this.tabs.first);
        }
      }
    }, 0);
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tab) => (tab.active = false));
    tab.active = true;
  }

  removeTab(index: number) {
    this.tabs[index] = false;
    this.removeTabEvent.emit(index);
    setTimeout(() => {
      if (this.tabs.length) {
        const activeTabs = this.tabs.filter((tab) => tab.active);

        if (activeTabs.length === 0) {
          this.selectTab(this.tabs.first);
        }
      }
    }, 0);
  }
}
