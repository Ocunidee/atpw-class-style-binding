import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly ghost1 = signal({ anim: 'joyful', style: 'color: red' })
  protected readonly ghost2 = signal({ anim: { jelly: true }, style: { color: 'green' }})
  protected readonly ghost3 = signal({ isWobbly: true, isBlue: true })
}
