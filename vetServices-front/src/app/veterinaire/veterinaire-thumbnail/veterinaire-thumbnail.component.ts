import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Veterinaire} from '../Veterinaire';

@Component({
  selector: 'fbapp-veterinaire-thumbnail',
  templateUrl: './veterinaire-thumbnail.component.html',
  styleUrls: ['./veterinaire-thumbnail.component.scss']
})
export class VeterinaireThumbnailComponent {
  @Input() public veterinaire!: Veterinaire;
  @Input() public isFavorite!: boolean;
  @Output() public chose = new EventEmitter<any>();


  public onSelectCharacter(veterinaire: Veterinaire): void {

  }

}
