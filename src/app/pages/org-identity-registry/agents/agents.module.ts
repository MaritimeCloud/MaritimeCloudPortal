import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../../theme/nga.module';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './agents.routing';
import { AgentsComponent } from './agents.component';
import { AgentListComponent } from './components/agent-list/agent-list.component';

@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        SharedModule,
        routing
    ],
    declarations: [
        AgentsComponent,
        AgentListComponent
    ]
})
export default class AgentsModule {
}