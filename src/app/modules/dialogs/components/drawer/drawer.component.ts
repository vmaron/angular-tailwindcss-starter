import {Component, Input, OnInit} from '@angular/core';
import {DialogsService} from '../../dialogs.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('500ms ease-in-out'))
    ]),
  ]
})
export class DrawerComponent<T> implements OnInit {
  drawerState = 'out';
  display = true;
  @Input() title: string;

  constructor(private dialogsService: DialogsService<T>) {
  }

  ngOnInit(): void {
    setTimeout(async () => {
      this.toggle();
    });
  }

  toggle() {
    this.drawerState = this.drawerState === 'out' ? 'in' : 'out';
  }

  async close(): Promise<void> {
    this.toggle();
    setTimeout(async () => {
      this.display = false;
      await this.dialogsService.close();
    }, 750);
  }
}
