const clickoutsideContext = '@@clickoutsideContext';

export default {
  bind(el: any, binding: any, vnode: any) {
    const documentHandler = (e:any) => {
      if (vnode.context && !el.contains(e.target)) {
        vnode.context[el[clickoutsideContext].methodName]();
      }
    };
    el[clickoutsideContext] = {
      documentHandler,
      methodName: binding.expression,
      arg: binding.arg || 'click',
    };
    document.addEventListener(el[clickoutsideContext].arg, documentHandler);
  },

  update(el: any, binding: any) {
    el[clickoutsideContext].methodName = binding.expression;
  },

  unbind(el: any) {
    document.removeEventListener(
        el[clickoutsideContext].arg,
        el[clickoutsideContext].documentHandler);
  }
}
