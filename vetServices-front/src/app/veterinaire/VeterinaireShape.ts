import { VeterinaireModel } from './veterinaire-add/VeterinaireModel';

const NO_TITLE = 'No Title';

export class VeterinaireShape {
  public _id!: number;
  public  name!: string;
  public  password!: string;
  public  createDate!: string;
  public  email!: string;

  constructor(data: VeterinaireModel) {
    this._id=data._id;
    this.name=data.name;
    this.password=data.password;
    this.createDate=data.createDate;
    this.email=data.email;

  }

  public static NEW(data: VeterinaireModel): VeterinaireShape {
    return new VeterinaireShape(data);
  }

  public static NEW_BUNCH(data: VeterinaireModel[]): VeterinaireShape[] {
    return data.map(VeterinaireShape.NEW);
  }

}
