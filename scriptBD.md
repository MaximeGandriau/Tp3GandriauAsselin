CREATE TABLE CSF (
NOM varchar2(200 BYTE),
COMP VARCHAR2(200 BYTE),
PRIX NUMBER(10, 2),
DTLS VARCHAR2(200 BYTE),
CONSTRAINT PK_CSF PRIMARY KEY (NOM)
);

ALTER SESSION SET NLS_LANGUAGE = 'ENGLISH';

INSERT INTO CSF values('K100 AIR WIRELESS', 'Corsair', 400, 'low profile, connecté sur 5 devices');
insert into CSF values('blackwidow v3 pro', 'razer', 300, 'méchanique, tactile');
insert into CSF values('K480', 'logitech', 59, 'bluetooth pour tablet et téléphone');
insert into CSF values('BK10', 'iClever', 60, 'ergonomic, en acier');
insert into CSF values('ROG Falchion', 'ASUS', 200, 'rgb, 65%');
commit;

CREATE TABLE CAF (
NOM varchar2(200 BYTE),
COMP VARCHAR2(200 BYTE),
PRIX NUMBER(10, 2),
DTLS VARCHAR2(200 BYTE),
CONSTRAINT PK_CAF PRIMARY KEY (NOM)
);

insert into CAF values('K55 RGB PRO XT', 'corsair', 90.19, 'rgb, touches macro');
insert into CAF values('BLACKWIDOW V3', 'RAZER', 132.29, 'rgb, switch verte');
insert into CAF values('k845', 'logitech', 79.99, 'aluminium, mechanic');
insert into CAF values('KB216', 'DELL', 24.99, 'chiclet style keys, confortable');
insert into CAF values('ROG Strix Scope RX', 'ASUS', 179.99, 'rgb, ROG RX Red Optical Mechanical Switches');
commit;

CREATE TABLE SAF (
NOM varchar2(200 BYTE),
COMP VARCHAR2(200 BYTE),
PRIX NUMBER(10, 2),
DTLS VARCHAR2(200 BYTE),
CONSTRAINT PK_SAF PRIMARY KEY (NOM)
);

insert into SAF values('NIGHTSWORD', 'corsair', 99.98, 'ajust poids entre 115g à 137g, 18000 dpi');
insert into SAF values('viper 8k', 'razer', 54.19, '20000 dpi, 8 bouttons à programmer');
insert into SAF values('M500s', 'logitech', 40.19, 'ergonomic, 4000dpi');
insert into SAF values('MS116', 'dell', 19.99, '3 bouttons, 1000 dpi');
insert into SAF values('ROG Gladius II Origin', 'asus', 140.28, '250 ips sensor, 50 million de click');
commit;

CREATE TABLE SSF (
NOM varchar2(200 BYTE),
COMP VARCHAR2(200 BYTE),
PRIX NUMBER(10, 2),
DTLS VARCHAR2(200 BYTE),
CONSTRAINT PK_SSF PRIMARY KEY (NOM)
);

insert into SSF values('DARK CORE RGB PRO SE', 'corsair', 123.99, '2000Hz, usb C');
insert into SSF values('Basilisk V3', 'Razer', 219.99, 'ergonomic, 4000Hz');
insert into SSF values('MX Anywhere 3', 'logitech', 90.19, 'compacte, 4000 dpi');
insert into SSF values('Wireless Mobile Mouse 1850', 'Microsoft', 1.98, 'duré à vie, ambidextrous design');
insert into SSF values('ROG Chakram Wireless Aura Sync RGB', 'ASUS', 219.99, 'rgb, 12h de batterie');
commit;

BEGIN
ORDS.enable_schema(
p_enabled => TRUE,
p_schema => 'RESTSCOTT',
p_url_mapping_type => 'BASE_PATH',
p_url_mapping_pattern => 'hr2', --premiere partie url pour interroger les données
p_auto_rest_auth => FALSE
);
COMMIT;
END;

BEGIN
ORDS.enable_object (
p_enabled => TRUE,
p_schema => 'RESTSCOTT',
p_object => 'CSF',
p_object_type => 'TABLE',
p_object_alias => 'clavierSansFile' --seconde partie du URL
);
COMMIT;
END;

BEGIN
ORDS.enable_object (
p_enabled => TRUE,
p_schema => 'RESTSCOTT',
p_object => 'CAF',
p_object_type => 'TABLE',
p_object_alias => 'clavierAvecFile' --seconde partie du URL
);
COMMIT;
END;

BEGIN
ORDS.enable_object (
p_enabled => TRUE,
p_schema => 'RESTSCOTT',
p_object => 'SAF',
p_object_type => 'TABLE',
p_object_alias => 'sourisAvecFil' --seconde partie du URL
);
COMMIT;
END;

BEGIN
ORDS.enable_object (
p_enabled => TRUE,
p_schema => 'RESTSCOTT',
p_object => 'SSF',
p_object_type => 'TABLE',
p_object_alias => 'sourisSansFil' --seconde partie du URL
);
COMMIT;
END;