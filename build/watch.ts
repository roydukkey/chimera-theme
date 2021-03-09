import type { ChildProcess } from 'child_process';
import type { TaskFunction } from 'gulp';
import { spawn } from 'child_process';
import { watch } from 'gulp';


const themeTask = (): ChildProcess => {
	return spawn('npm', ['run', 'build:theme'], {
		stdio: 'inherit'
	});
};

themeTask.displayName = 'build:theme';


const task: TaskFunction = (): void => {
	watch([
		'./src/Color.ts',
		'./src/Themes/**/*.ts'
	], themeTask);

	spawn('npm', ['run', 'build:extension', '--', '--watch', '--preserveWatchOutput'], {
		stdio: 'inherit'
	});
};


export default task;
