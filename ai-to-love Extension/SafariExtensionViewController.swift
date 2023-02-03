//
//  SafariExtensionViewController.swift
//  ai-to-love Extension
//
//  Created by Stefan Kraft on 03.02.23.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
