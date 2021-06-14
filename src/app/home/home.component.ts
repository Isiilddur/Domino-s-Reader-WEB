import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import { faQuestionCircle, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  faQuestion = faQuestionCircle;
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;
  playersNumber: number = 0;
  scoreNumber: number = 0;
  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  detectMobileDevice(): boolean {
    const userAgent = window.navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent)
  }

  setPlayers(number: number): void {
    if(this.playersNumber !== 0 || number > 0){
      this.playersNumber = this.playersNumber + number;
    }
  }

  setScore(number: number): void {
    if(this.scoreNumber !== 0 || number > 0){
      this.scoreNumber = this.scoreNumber + number;
    }
  }

  startGame():void {
    this.setConfiguration()
    this.navigate('/score')
  }

  setConfiguration():void{
    let configurationGame = {playersNumber:this.playersNumber, scoreNumber:this.scoreNumber}
    window.localStorage.setItem('configurationGame', JSON.stringify(configurationGame));
  }

  navigate(route:string): void{
  }
}
