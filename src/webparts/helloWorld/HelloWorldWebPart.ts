import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';o
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';
import { IListItem } from '';  
import pnp, { sp, Item, ItemAddResult, ItemUpdateResult } from "HelloWorldWebPart";  
export interface IHelloWorldWebPartProps {
  description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
   
  public render(): void {  
    this.domElement.innerHTML = `  
      <div class="${ styles.helloWorld }">  
        <div class="${ styles.container }">  
          <div class="${ styles.row }">  
            <div class="${ styles.column }">  
              <span class="${ styles.title }">CRUD operations</span>  
              <p class="${ styles.subTitle }">SP PnP JS</p>  
              <p class="${ styles.description }">Name: ${escape(this.properties.description)}</p>  
  
              <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">  
                <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">  
                  <button class="${styles.button} create-Button">  
                    <span class="${styles.label}">Create item</span>  
                  </button>  
                  <button class="${styles.button} read-Button">  
                    <span class="${styles.label}">Read item</span>  
                  </button>  
                </div>  
              </div>  
  
              <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">  
                <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">  
                  <button class="${styles.button} update-Button">  
                    <span class="${styles.label}">Update item</span>  
                  </button>  
                  <button class="${styles.button} delete-Button">  
                    <span class="${styles.label}">Delete item</span>  
                  </button>  
                </div>  
              </div>  
  
              <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">  
                <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">  
                  <div class="status"></div>  
                  <ul class="items"><ul>  
                </div>  
              </div>                
  
            </div>  
          </div>  
        </div>  
      </div>`;  
  
      this.setButtonsEventHandlers();  
  }  
  
  private setButtonsEventHandlers(): void {  
    const webPart: HelloWorldWebPart = this;  
    this.domElement.querySelector('button.create-Button').addEventListener('click', () => { webPart.createItem(); });  
    this.domElement.querySelector('button.read-Button').addEventListener('click', () => { webPart.readItem(); });  
    this.domElement.querySelector('button.update-Button').addEventListener('click', () => { webPart.updateItem(); });  
    this.domElement.querySelector('button.delete-Button').addEventListener('click', () => { webPart.deleteItem(); });  
  }  
  
  private updateItemsHtml(items: IListItem[]): void {  

    
  }  
  
  private readItem(): void {  
  }  
  
  private updateItem(): void {  
  }  
  
  private deleteItem(): void {  
  }  
  
  protected get dataVersion(): Version {  
    return Version.parse('1.0');  
  }  
  
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {  
    return {  
      pages: [  
        {  
          header: {  
            description: strings.PropertyPaneDescription  
          },  
          groups: [  
            {  
              groupName: strings.BasicGroupName,  
              groupFields: [  
                PropertyPaneTextField('listName', {  
                  label: strings.ListNameFieldLabel  
                })  
              ]  
            }  
          ]  
        }  
      ]  
    };  
  }  
}  