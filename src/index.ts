import {JupyterFrontEnd, JupyterFrontEndPlugin} from '@jupyterlab/application';
import {ICommandPalette, MainAreaWidget} from '@jupyterlab/apputils';
import {Weather} from "./weather";


/**
 * Initialization data for the jupyterlab_weather extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
    id: 'jupyterlab_weather',
    autoStart: true,
    requires: [ICommandPalette],
    activate: async (app: JupyterFrontEnd, palette: ICommandPalette) => {
        console.log('JupyterLab extension jupyterlab_apod is activated!');

        const content = new Weather();
        const widget = new MainAreaWidget({content});

        widget.id = 'weather-jupyterlab';
        widget.title.label = 'Weather';
        widget.title.closable = true;

        const command: string = 'weather:open';

        app.commands.addCommand(command, {
            label: 'Weather Details',
            execute: () => {
                if (!widget.isAttached) {
                    app.shell.add(widget, 'main');
                }
                app.shell.activateById(widget.id);
            }
        });

        palette.addItem({command, category: 'Weather'});
    }

};

export default extension;
