import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html/safe-html';
import { SlicePipe } from './slice/slice';
@NgModule({
	declarations: [SafeHtmlPipe,
    SlicePipe],
	imports: [],
	exports: [SafeHtmlPipe,
    SlicePipe]
})
export class PipesModule {}
