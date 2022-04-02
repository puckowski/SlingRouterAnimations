import {
  textNode,
  markup,
  addRoute,
  route
} from '../node_modules/slingjs/sling.min';


class RouterTransitionComponent1 {
  constructor() {
  }

  routeToNext() {
    route('route2');
  }

  slDetachedOnNodeDestroy(node) {
    return node;
  }

  view() {
    return markup('div', {
      attrs: {
        id: 'divRouterOutlet',
        class: 'visible',
        style:
          'display: flex; justify-content: center; align-items: center; height: 95%;',
        slanimatedestroy: 'hide',
        slanimatedestroytarget: this.slDetachedOnNodeDestroy.bind(this),
      },
      children: [
        markup('h1', {
          children: [
            textNode('Route 1'),
            markup('button', {
              attrs: {
                onclick: this.routeToNext.bind(this),
              },
              children: [textNode('Hide')],
            }),
          ],
        }),
      ],
    });
  }
}

class RouterTransitionComponent2 {
  constructor() {
  }

  routeToNext() {
    route('route1');
  }

  slDetachedOnNodeDestroy(node) {
    return node;
  }

  view() {
    return markup('div', {
      attrs: {
        id: 'divRouterOutlet',
        class: 'visible',
        style:
          'display: flex; justify-content: center; align-items: center; height: 95%;',
        slanimatedestroy: 'hide',
        slanimatedestroytarget: this.slDetachedOnNodeDestroy.bind(this),
      },
      children: [
        markup('h1', {
          children: [
            textNode('Route 2'),
            markup('button', {
              attrs: {
                onclick: this.routeToNext.bind(this),
              },
              children: [textNode('Hide')],
            }),
          ],
        }),
      ],
    });
  }
}

addRoute('route1', {
  component: new RouterTransitionComponent1(),
  root: 'divRouterOutlet',
  animateDestroy: true
});
addRoute('route2', {
  component: new RouterTransitionComponent2(),
  root: 'divRouterOutlet',
  animateDestroy: true
});

route('route1');