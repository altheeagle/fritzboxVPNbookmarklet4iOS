javascript:(function()%7Buserselectseite%20%3D%20false%3Bdocument.querySelectorAll(%22.arrow_box%22).forEach(function(elm)%7Bif%20(elm.innerText%20%3D%3D%20%22FRITZ!Box-Benutzer%22)%7Buserselectseite%20%3D%20true%3B%7D%7D)%3Bif%20(userselectseite)%20%7Balert(%22Bitte%20einen%20Bnutzer%20mit%20einem%20Klick%20auf%20den%20Stift%20zum%20bearbeiten%20%C3%B6ffnen%22)%3B%7D%20else%20%7Buserseite%20%3D%20false%3Bdocument.querySelectorAll(%22.arrow_box%22).forEach(function(elm)%7Bif%20(elm.innerText%20%3D%3D%20%22Benutzerkonto%22)%7Buserseite%20%3D%20true%3B%7D%7D)%3Bif%20(userseite)%7Bvar%20xhr%20%3D%20window.XMLHttpRequest%20%3F%20new%20XMLHttpRequest()%20%3A%20new%20ActiveXObject('Microsoft.XMLHTTP')%3Bxhr.responseType%20%3D%20%22document%22%3Bxhr.open('GET'%2C%20document.getElementById(%22vpn_access_link%22).getAttribute(%22href%22))%3Bxhr.onreadystatechange%20%3D%20function()%20%7Bif%20(xhr.readyState%3E3%20%26%26%20xhr.status%3D%3D200)%20%7Bvpnseite%20%3D%20xhr.response%3Bconsole.log(vpnseite)%3Bvpndata%20%3D%20%7B%7D%3Bvpndata%5B%22RemoteAddress%22%5D%20%3D%20vpnseite.querySelector('.formular%20label%5Bfor%3D%22uiVPNServer%22%5D%20%2B%20div').innerText%3Bvpndata%5B%22LocalIdentifier%22%5D%20%3D%20vpnseite.querySelector('.formular%20label%5Bfor%3D%22uiVPNGroup%22%5D%20%2B%20div').innerText%3Bvpndata%5B%22SharedSecret%22%5D%20%3D%20vpnseite.querySelector('.formular%20label%5Bfor%3D%22uiVPNSecret%22%5D%20%2B%20div').innerText%3Bvpndata%5B%22XAuthName%22%5D%20%3D%20vpnseite.querySelector('.formular%20label%5Bfor%3D%22uiVPNAccount%22%5D%20%2B%20div').innerText%3Bvpndata%5B%22PayloadUUID%22%5D%20%3D%20'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(%2F%5Bxy%5D%2Fg%2C%20function(c)%20%7Bvar%20r%20%3D%20Math.random()%20*%2016%20%7C%200%2C%20v%20%3D%20c%20%3D%3D%20'x'%20%3F%20r%20%3A%20(r%20%26%200x3%20%7C%200x8)%3Breturn%20v.toString(16)%3B%7D)%3BxmlString%20%3D%20'%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20plist%20PUBLIC%20%22-%2F%2FApple%2F%2FDTD%20PLIST%201.0%2F%2FEN%22%20%22http%3A%2F%2Fwww.apple.com%2FDTDs%2FPropertyList-1.0.dtd%22%3E%3Cplist%20version%3D%221.0%22%3E%3Cdict%3E%3Ckey%3EPayloadContent%3C%2Fkey%3E%3Carray%3E%3Cdict%3E%3Ckey%3EIPSec%3C%2Fkey%3E%3Cdict%3E%3Ckey%3EAuthenticationMethod%3C%2Fkey%3E%3Cstring%3ESharedSecret%3C%2Fstring%3E%3Ckey%3ELocalIdentifier%3C%2Fkey%3E%3Cstring%3Esonja%3C%2Fstring%3E%3Ckey%3ELocalIdentifierType%3C%2Fkey%3E%3Cstring%3EKeyID%3C%2Fstring%3E%3Ckey%3ERemoteAddress%3C%2Fkey%3E%3Cstring%3E%23remoteAdress%23%3C%2Fstring%3E%3Ckey%3ESharedSecret%3C%2Fkey%3E%3Cdata%3E%23SharedSecret%23%3C%2Fdata%3E%3Ckey%3EXAuthEnabled%3C%2Fkey%3E%3Cinteger%3E1%3C%2Finteger%3E%3Ckey%3EXAuthName%3C%2Fkey%3E%3Cstring%3E%23XAuthName%23%3C%2Fstring%3E%3Ckey%3EXAuthPassword%3C%2Fkey%3E%3Cstring%3E%23XAuthPassword%23%3C%2Fstring%3E%3C%2Fdict%3E%3Ckey%3EIPv4%3C%2Fkey%3E%3Cdict%3E%3Ckey%3EOverridePrimary%3C%2Fkey%3E%3Cinteger%3E0%3C%2Finteger%3E%3C%2Fdict%3E%3Ckey%3EPayloadDescription%3C%2Fkey%3E%3Cstring%3EConfigures%20VPN%20settings%3C%2Fstring%3E%3Ckey%3EPayloadDisplayName%3C%2Fkey%3E%3Cstring%3EVPN%3C%2Fstring%3E%3Ckey%3EPayloadIdentifier%3C%2Fkey%3E%3Cstring%3Ecom.apple.vpn.managed.1%23PayloadUUID%23%3C%2Fstring%3E%3Ckey%3EPayloadType%3C%2Fkey%3E%3Cstring%3Ecom.apple.vpn.managed%3C%2Fstring%3E%3Ckey%3EPayloadUUID%3C%2Fkey%3E%3Cstring%3E%23PayloadUUID%23%3C%2Fstring%3E%3Ckey%3EPayloadVersion%3C%2Fkey%3E%3Cinteger%3E1%3C%2Finteger%3E%3Ckey%3EProxies%3C%2Fkey%3E%3Cdict%3E%3Ckey%3EHTTPEnable%3C%2Fkey%3E%3Cinteger%3E0%3C%2Finteger%3E%3Ckey%3EHTTPSEnable%3C%2Fkey%3E%3Cinteger%3E0%3C%2Finteger%3E%3C%2Fdict%3E%3Ckey%3EUserDefinedName%3C%2Fkey%3E%3Cstring%3EVPN%20f%C3%BCr%20%23XAuthName%23%3C%2Fstring%3E%3Ckey%3EVPNType%3C%2Fkey%3E%3Cstring%3EIPSec%3C%2Fstring%3E%3C%2Fdict%3E%3C%2Farray%3E%3Ckey%3EPayloadDescription%3C%2Fkey%3E%3Cstring%3EVPN%20f%C3%BCr%20User%20%23XAuthName%23%3C%2Fstring%3E%3Ckey%3EPayloadDisplayName%3C%2Fkey%3E%3Cstring%3EVPN%20f%C3%BCr%20%23XAuthName%23%3C%2Fstring%3E%3Ckey%3EPayloadIdentifier%3C%2Fkey%3E%3Cstring%3Enetzgrenze.org.%23PayloadUUID%23%3C%2Fstring%3E%3Ckey%3EPayloadRemovalDisallowed%3C%2Fkey%3E%3Cfalse%2F%3E%3Ckey%3EPayloadType%3C%2Fkey%3E%3Cstring%3EConfiguration%3C%2Fstring%3E%3Ckey%3EPayloadUUID%3C%2Fkey%3E%3Cstring%3E%23PayloadUUID%23%3C%2Fstring%3E%3Ckey%3EPayloadVersion%3C%2Fkey%3E%3Cinteger%3E1%3C%2Finteger%3E%3C%2Fdict%3E%3C%2Fplist%3E'%3BxmlString%20%3D%20xmlString.replace(%2F%23remoteAdress%23%2Fg%2Cvpndata%5B%22RemoteAddress%22%5D)%3BxmlString%20%3D%20xmlString.replace(%2F%23SharedSecret%23%2Fg%2Cvpndata%5B%22SharedSecret%22%5D)%3BxmlString%20%3D%20xmlString.replace(%2F%23XAuthName%23%2Fg%2Cvpndata%5B%22XAuthName%22%5D)%3BxmlString%20%3D%20xmlString.replace(%2F%23XAuthPassword%23%2Fg%2C%22nixgibts%22)%3BxmlString%20%3D%20xmlString.replace(%2F%23PayloadUUID%23%2Fg%2Cvpndata%5B%22PayloadUUID%22%5D)%3Belement%20%3D%20document.createElement('a')%3Belement.setAttribute('href'%2C%20'data%3Atext%2Fplain%3Bcharset%3Dutf-8%2C'%20%2B%20encodeURIComponent(xmlString))%3Belement.setAttribute('download'%2C%20'vpn.mobileconfig')%3Belement.style.display%20%3D%20'none'%3Bdocument.body.appendChild(element)%3Belement.click()%3Bdocument.body.removeChild(element)%3B%7D%3B%7D%3Bxhr.setRequestHeader('X-Requested-With'%2C%20'XMLHttpRequest')%3Bxhr.send()%3B%7D%20else%20%7Blocation.replace(%22%2F%3Fsid%3D%22%20%2B%20main.sid%20%2B%20%22%26lp%3DmUser%22)%3B%7D%7D%7D)()