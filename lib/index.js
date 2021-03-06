import { componentFactory, $internalHooks } from './component';
export { createDecorator, mixins } from './util';
function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};
export default Component;
// re-exports for additional extensibility
export { componentFactory };
