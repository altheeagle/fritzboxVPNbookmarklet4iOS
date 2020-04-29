userselectseite = false;

document.querySelectorAll(".arrow_box").forEach(function(elm){
	if (elm.innerText == "FRITZ!Box-Benutzer"){
		userselectseite = true;
	}
});

if (userselectseite) {
	alert("Bitte einen Bnutzer mit einem Klick auf den Stift zum bearbeiten öffnen");
	
} else {
	userseite = false;
	document.querySelectorAll(".arrow_box").forEach(function(elm){
		if (elm.innerText == "Benutzerkonto"){
			userseite = true;
		}
	});
	if (userseite){
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		xhr.responseType = "document";
		xhr.open('GET', document.getElementById("vpn_access_link").getAttribute("href"));
		xhr.onreadystatechange = function() {
	        if (xhr.readyState>3 && xhr.status==200) {
				vpnseite = xhr.response;
				console.log(vpnseite);
				vpndata = {};
				vpndata["RemoteAddress"] = vpnseite.querySelector('.formular label[for="uiVPNServer"] + div').innerText;
				vpndata["LocalIdentifier"] = vpnseite.querySelector('.formular label[for="uiVPNGroup"] + div').innerText;
				vpndata["SharedSecret"] = vpnseite.querySelector('.formular label[for="uiVPNSecret"] + div').innerText;
				vpndata["XAuthName"] = vpnseite.querySelector('.formular label[for="uiVPNAccount"] + div').innerText;
				vpndata["PayloadUUID"] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
					var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
					return v.toString(16);
				});

				
				xmlString = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"><plist version="1.0"><dict><key>PayloadContent</key><array><dict><key>IPSec</key><dict><key>AuthenticationMethod</key><string>SharedSecret</string><key>LocalIdentifier</key><string>sonja</string><key>LocalIdentifierType</key><string>KeyID</string><key>RemoteAddress</key><string>#remoteAdress#</string><key>SharedSecret</key><data>#SharedSecret#</data><key>XAuthEnabled</key><integer>1</integer><key>XAuthName</key><string>#XAuthName#</string><key>XAuthPassword</key><string></string></dict><key>IPv4</key><dict><key>OverridePrimary</key><integer>0</integer></dict><key>PayloadDescription</key><string>Configures VPN settings</string><key>PayloadDisplayName</key><string>VPN</string><key>PayloadIdentifier</key><string>com.apple.vpn.managed.1#PayloadUUID#</string><key>PayloadType</key><string>com.apple.vpn.managed</string><key>PayloadUUID</key><string>#PayloadUUID#</string><key>PayloadVersion</key><integer>1</integer><key>Proxies</key><dict><key>HTTPEnable</key><integer>0</integer><key>HTTPSEnable</key><integer>0</integer></dict><key>UserDefinedName</key><string>VPN für #XAuthName#</string><key>VPNType</key><string>IPSec</string></dict></array><key>PayloadDescription</key><string>VPN für User #XAuthName#</string><key>PayloadDisplayName</key><string>VPN für #XAuthName#</string><key>PayloadIdentifier</key><string>netzgrenze.org.#PayloadUUID#</string><key>PayloadRemovalDisallowed</key><false/><key>PayloadType</key><string>Configuration</string><key>PayloadUUID</key><string>#PayloadUUID#</string><key>PayloadVersion</key><integer>1</integer></dict></plist>';

				xmlString = xmlString.replace(/#remoteAdress#/g,vpndata["RemoteAddress"]);
				xmlString = xmlString.replace(/#SharedSecret#/g,vpndata["SharedSecret"]);
				xmlString = xmlString.replace(/#XAuthName#/g,vpndata["XAuthName"]);
				xmlString = xmlString.replace(/#PayloadUUID#/g,vpndata["PayloadUUID"]);
								
				element = document.createElement('a');
				element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(xmlString));
				element.setAttribute('download', 'vpn.mobileconfig');

				element.style.display = 'none';
				document.body.appendChild(element);

				element.click();

				document.body.removeChild(element);
			};
	    };
	    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	    xhr.send();
	} else {
		location.replace("/?sid=" + main.sid + "&lp=mUser");
	}
}
