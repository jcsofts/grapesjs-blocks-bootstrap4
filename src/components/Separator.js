import icon from "raw-loader!../icons/separator.svg";

export const SeparatorBlock = (bm, label) => {
    bm.add('separator', {
        label: `
            ${icon}
            <div>${label}</div>
        `,
        category: 'Typography',
        content: {
            type: 'separator'
        }
    });
};

export default (domc) => {
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    domc.addType('separator', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Separator',
                tagName: 'hr',
                droppable: false,
                editable: false,
            }),

        }, {
            isComponent(el) {
                if (el && el.tagName=='HR') {
                    return { type: 'separator' };
                }
            }
        }),
        view: defaultView
    });
}
