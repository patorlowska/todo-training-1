import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';

@Component({
    selector: 'lib-team-list',
    templateUrl: './team-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListComponent {
    persons = of([
        {
            src: 'https://i.insider.com/55df18389dd7cc0f008b64cc?width=1000&format=jpeg&auto=webp',
            alt: 'Pheobe Buffay',
            name: 'Pheobe Buffay',
            link: '/pracownik/Pheobe Buffay',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad provident nam accusamus blanditiis quidem distinctio laboriosam nequeveritatis, repudiandae animi, mollitia consectetur deserunt! Laboriosam non maxime nulla, illorecusandae quo.'
        },
        {
            src: 'https://www.cheatsheet.com/wp-content/uploads/2020/10/Ross-Geller-1002x1024.jpg',
            alt: 'Ross Geller',
            name: 'Ross Geller',
            link: '/pracownik/Ross Geller',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad provident nam accusamus blanditiis quidem distinctio laboriosam nequeveritatis, repudiandae animi, mollitia consectetur deserunt! Laboriosam non maxime nulla, illorecusandae quo.'
        },
        {
            src: 'http://images6.fanpop.com/image/photos/39500000/Joey-Tribbiani-joey-tribbiani-39541461-595-640.jpg',
            alt: 'Joey Tribbiani',
            name: 'Joey Tribbiani',
            link: '/pracownik/Joey Tribbiani',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad provident nam accusamus blanditiis quidem distinctio laboriosam nequeveritatis, repudiandae animi, mollitia consectetur deserunt! Laboriosam non maxime nulla, illorecusandae quo.'
        },
        {
            src: 'https://thestickyfacts.com/wp-content/uploads/featured-img/j/janice-hosenstein.jpg',
            alt: 'Janice Litman Garelnick',
            name: 'Janice Litman Garelnick',
            link: '/pracownik/Janice Litman Garelnick',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad provident nam accusamus blanditiis quidem distinctio laboriosam nequeveritatis, repudiandae animi, mollitia consectetur deserunt! Laboriosam non maxime nulla, illorecusandae quo.'
        },
    ])
}
