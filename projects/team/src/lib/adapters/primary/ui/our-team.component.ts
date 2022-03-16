import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonDTO } from '../../../application/ports/secondary/person.dto';




@Component({
    selector: 'lib-our-team',
    templateUrl: './our-team.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurTeamComponent {
    team$: Observable<PersonDTO[]> = of([
        {
            id: '1',
            imageLink: 'https://www.glamour.pl/media/cache/default_view/uploads/media/default/0004/20/ralph-lauren-stworzyl-kolekcje-inspirowana-stylem-rachel-green-z-przyjaciol.jpeg',
            name: 'Rachel Green',
            linkUrl: '/pracownik/Rachel Green',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad provident nam accusamus blanditiis quidem distinctio laboriosam nequeveritatis, repudiandae animi, mollitia consectetur deserunt! Laboriosam non maxime nulla, illorecusandae quo.',
        },
        {
            id: '2',
            imageLink: 'https://img.wattpad.com/ec2d5e8b067870e0294c321bfc5ec27b804cb823/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f63525a704e676d49577a7a654a513d3d2d3736393336393139372e313562386630303631343037653434643232353935353633313032392e6a7067',
            // alt: 'Monica Geller',
            name: 'Monica Geller',
            linkUrl: '/pracownik/Monica Geller',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad provident nam accusamus blanditiis quidem distinctio laboriosam nequeveritatis, repudiandae animi, mollitia consectetur deserunt! Laboriosam non maxime nulla, illorecusandae quo.',
        },
        {
            id: '3',
            imageLink: 'https://i.pinimg.com/474x/35/5f/76/355f76eadb0b1670300f8d24b82e837b.jpg',
            // alt: 'Chandler Bing',
            name: 'Chandler Bing',
            linkUrl: '/pracownik/Chandler Bing',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad provident nam accusamus blanditiis quidem distinctio laboriosam nequeveritatis, repudiandae animi, mollitia consectetur deserunt! Laboriosam non maxime nulla, illorecusandae quo.',
        }
    ])
}
