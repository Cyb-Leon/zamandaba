import { Routes } from '@angular/router';
import { HackathonComponent } from './hackathon-component/hackathon-component';
import { ProjectsPage } from './projects-page/projects-page';

export const routes: Routes = [
    {
        path: '',
        component: ProjectsPage
    },
    {
        path: 'hackathon',
        component: HackathonComponent
    }
];
