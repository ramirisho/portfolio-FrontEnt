import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
        <div class="w-full flex px-5 py-8 border-t border-solid border-slate-700 transition-custom">
            <p class="text-base mx-auto text-center text-slate-400 transition-custom">
            © Copyright 2023 Ramiro Solano.
            <br class="sm:hidden"> All rights reserved.
            </p>
        </div>
    `
})

export class FooterComponent {
   
}