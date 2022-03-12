import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'lib-team-list',
    templateUrl: './team-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListComponent {
    person = [
        // {
        //     src: 'https://www.glamour.pl/media/cache/default_view/uploads/media/default/0004/20/ralph-lauren-stworzyl-kolekcje-inspirowana-stylem-rachel-green-z-przyjaciol.jpeg',
        //     alt: 'Rachel Green',
        //     name: 'Rachel Green',
        // },
        // {
        //     src: 'https://img.wattpad.com/ec2d5e8b067870e0294c321bfc5ec27b804cb823/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f63525a704e676d49577a7a654a513d3d2d3736393336393139372e313562386630303631343037653434643232353935353633313032392e6a7067',
        //     alt: 'Monica Geller',
        //     name: 'Monica Geller',
        // },
        // {
        //     src: 'https://i.pinimg.com/474x/35/5f/76/355f76eadb0b1670300f8d24b82e837b.jpg',
        //     alt: 'Chandler Bing',
        //     name: 'Chandler Bing',
        // },
        {
            src: 'https://i.insider.com/55df18389dd7cc0f008b64cc?width=1000&format=jpeg&auto=webp',
            alt: 'Pheobe Buffay',
            name: 'Pheobe Buffay',
        },
        {
            src: 'https://www.cheatsheet.com/wp-content/uploads/2020/10/Ross-Geller-1002x1024.jpg',
            alt: 'Ross Geller',
            name: 'Ross Geller',
        },
        {
            src: 'http://images6.fanpop.com/image/photos/39500000/Joey-Tribbiani-joey-tribbiani-39541461-595-640.jpg',
            alt: 'Joey Tribbiani',
            name: 'Joey Tribbiani',
        },
        {
            src: 'https://thestickyfacts.com/wp-content/uploads/featured-img/j/janice-hosenstein.jpg',
            alt: 'Janice Litman Garelnick',
            name: 'Janice Litman Garelnick',
        },


    ]
}
