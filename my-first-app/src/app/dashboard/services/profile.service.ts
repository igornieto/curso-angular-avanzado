import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  getProfile() {
    return fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .catch(error => {
        console.log('Error obteniendo el perfil', error);
      })
  }
}