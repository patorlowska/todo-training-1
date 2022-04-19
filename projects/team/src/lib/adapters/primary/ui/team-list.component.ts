import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonDTO } from '../../../application/ports/secondary/person.dto';

@Component({
    selector: 'lib-team-list',
    templateUrl: './team-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListComponent {
    persons$: Observable<PersonDTO[]> = of([
        {
            id: '1',
            imageLink: 'https://i.insider.com/55df18389dd7cc0f008b64cc?width=1000&format=jpeg&auto=webp',
            name: 'Pheobe Buffay',
            linkUrl: '/pracownik/Pheobe Buffay',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad provident nam accusamus blanditiis quidem distinctio laboriosam nequeveritatis, repudiandae animi, mollitia consectetur deserunt! Laboriosam non maxime nulla, illorecusandae quo.',
            department: {
                name: '',
                employeeCount: 0,
            }
        },
        {
            id: '2',
            imageLink: 'https://www.cheatsheet.com/wp-content/uploads/2020/10/Ross-Geller-1002x1024.jpg',
            name: 'Ross Geller',
            linkUrl: '/pracownik/Ross Geller',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad provident nam accusamus blanditiis quidem distinctio laboriosam nequeveritatis, repudiandae animi, mollitia consectetur deserunt! Laboriosam non maxime nulla, illorecusandae quo.',
            department: {
                name: '',
                employeeCount: 0,
            }

        },
        {
            id: '3',
            imageLink: 'http://images6.fanpop.com/image/photos/39500000/Joey-Tribbiani-joey-tribbiani-39541461-595-640.jpg',
            name: 'Joey Tribbiani',
            linkUrl: '/pracownik/Joey Tribbiani',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad provident nam accusamus blanditiis quidem distinctio laboriosam nequeveritatis, repudiandae animi, mollitia consectetur deserunt! Laboriosam non maxime nulla, illorecusandae quo.',
            department: {
                name: '',
                employeeCount: 0,
            }
        },
        {
            id: '4',
            imageLink: 'https://thestickyfacts.com/wp-content/uploads/featured-img/j/janice-hosenstein.jpg',
            name: 'Janice Litman Garelnick',
            linkUrl: '/pracownik/Janice Litman Garelnick',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad provident nam accusamus blanditiis quidem distinctio laboriosam nequeveritatis, repudiandae animi, mollitia consectetur deserunt! Laboriosam non maxime nulla, illorecusandae quo.',
            department: {
                name: '',
                employeeCount: 0,
            }
        },
    ])
}
