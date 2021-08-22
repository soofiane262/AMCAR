import { ComponentDidDisappearEvent, ComponentWillAppearEvent, ModalDismissedEvent } from '../../interfaces/ComponentEvents';
import { ComponentDidAppearEvent, NavigationButtonPressedEvent } from '../../index';
export declare const events: {
    navigationButtonPressed: ((_event: NavigationButtonPressedEvent) => void)[];
    componentWillAppear: ((_event: ComponentWillAppearEvent) => void)[];
    componentDidAppear: ((_event: ComponentDidAppearEvent) => void)[];
    componentDidDisappear: ((_event: ComponentDidDisappearEvent) => void)[];
    modalDismissed: ((_event: ModalDismissedEvent) => void)[];
    invokeComponentWillAppear: (event: ComponentWillAppearEvent) => void;
    invokeComponentDidAppear: (event: ComponentDidAppearEvent) => void;
    invokeComponentDidDisappear: (event: ComponentDidDisappearEvent) => void;
    invokeModalDismissed: (event: ModalDismissedEvent) => void;
    invokeNavigationButtonPressed: (event: NavigationButtonPressedEvent) => void;
};
