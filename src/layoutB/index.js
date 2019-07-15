import React, {Component} from "react";
import classnames from 'classnames';
import Header from './header';
import Sider from './sider';
import Content from './content';
import Container from './container';
import Footer from './footer';

export default class extends Component {

    static Header = Header;

    static Sider = Sider;

    static Content = Content;

    static Container = Container;

    static Footer = Footer;

    render() {
        return <section className={classnames('x-b-layout', this.props.className)}>{this.props.children}</section>;
    }
}
