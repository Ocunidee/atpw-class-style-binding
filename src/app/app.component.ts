import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ghost1 = { anim: 'joyful', style: 'color: red' }
  ghost2 = { anim: { jelly: true }, style: { color: 'green' }}
  ghost3 = { isWobbly: true, isBlue: true }
}
