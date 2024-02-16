"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var DayjsDateProvider_1 = require("./DateProvider/implementations/DayjsDateProvider");
var EtherealMailProvider_1 = require("./MailProvider/implementations/EtherealMailProvider");
tsyringe_1.container.registerSingleton('DayjsDateProvider', DayjsDateProvider_1.DayjsDateProvider);
tsyringe_1.container.registerInstance('EtherealMailProvider', new EtherealMailProvider_1.EtherealMailProvider());
