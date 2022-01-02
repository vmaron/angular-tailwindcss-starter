import {Component, HostListener, Input, OnInit} from '@angular/core';
import {DialogsService} from '../../dialogs.service';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent<T> implements OnInit {
  drawerState = 'slide-out';
  @Input() title: string;
  private isSmallScreen: boolean;

  constructor(private dialogsService: DialogsService<T>) {
  }

  ngOnInit(): void {
    setTimeout(async () => this.toggle());
    this.isSmallScreen = window.innerWidth <= 640;
  }

  toggle() {
    this.drawerState = this.drawerState === 'slide-out' ? 'slide-in' : 'slide-out';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isSmallScreen = event.target.innerWidth <= 640;
  }

  async close(): Promise<void> {
    this.toggle();
    if (this.isSmallScreen) {
      await this.dialogsService.close();
    } else {
      setTimeout(async () => await this.dialogsService.close(), 750);
    }
  }
}
