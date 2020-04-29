# fritzboxVPNbookmarklet4iOS
Ein Bookmarklet um eine .mobileconfig für die VPN-Verbindung zur Fritzbox zu erzeugen. Damit ersparst du dir das Eintragen der Benutzerdaten auf dem iOS Gerät (Funktioniert auch mit iPadOS)

## Installation

Im Browser einen neuen Link in der Bookmarkleiste/Favoritenleiste anlegen, den Namen kannst du frei wählen. Diesen Link bearbeiten und den Inhalt der Datei bookmarklet.txt in das Feld URL kopieren. Damit hat du das Bookmarklet installiert.

## Nutzung

Befolge die [Anleitung von AVM](https://avm.de/service/vpn/tipps-tricks/vpn-verbindung-zur-fritzbox-unter-apple-ios-zb-iphone-einrichten/) bis zu Schritt 3, hierbei unterstützt dich das Bookmarklet.
1. Logge dich auf der Fritzbox ein. Navigiere zu System/Fritzbox-Benutzer oder klicke auf das Bookmarklet, das bringt dich zur richtigen Seite.
2. Suche den Fritzbox Benutzer für den du die Konfigurationsdatei erstellen willst und klicke auf den __Stift__ um den User zu bearbeiten.
3. Klicke nun auf das Bookmarklet. Dieses holt sich die Informationen und öffnet einen Downloaddialog. Speichere die Datei ab. Der Dateiname ist egal, die Endung __.mobileconfig__ muss erhalten bleiben.
4. Schicke die Datei per Mail an das iOS Gerät. Öffne dort die Mail und Lade die Datei runter (draufklicken). Es erscheint ein Dialog das laden bestätigt.
5. Öffne die Einstellungen, dort erschein __Profil geladen__, Klicke drauf und dann oben rechts auf __Installieren__.
6. Gib deine Code ein.
7. Bestätige die Warnung das das Profil nicht Signiert ist mit einem Klick auf __Installieren__, dann noch mal auf __Installieren__. 
8. Klicke auf __Fertig__.
9. Nun kannst du der Anleitung von AVM wieder folgen, es geht bei Punkt 4 weiter. Beim Herstellen der Verbindung wirst du nach einem Passwort gefragt. Gib dort das Passwort deines Fritzbox Users ein.
