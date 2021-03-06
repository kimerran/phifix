/*  phifix.js
	small js library to identify philippine mobile networks
*/
function Phifix(){
	this.config = {
		network_name_sun : "Sun Cellular",
		network_name_smart: "Smart Communication",
		network_name_globe: "Globe",
	};
	this.find = function(prefix){
		if (this.config.prefixes_sun.indexOf(prefix) > -1) return this.config.network_name_sun;
		if (this.config.prefixes_smart.indexOf(prefix) > -1) return this.config.network_name_smart;
		if (this.config.prefixes_globe.indexOf(prefix) > -1) return this.config.network_name_globe;			
	}
	this.setNetworkName = function(netid,name){
		switch(netid) {
			case 'sun'	: this.config.network_name_sun = name; break;			   
			case 'smart': this.config.network_name_smart = name; break;
			case 'globe': this.config.network_name_globe = name; break;			    
			default: break;	   
		}
	}
	this.getNetworkIds = function(){
		return	['sun','smart','globe'];
	}
	this.getPrefixesByNetworkId = function(netid){
		switch(netid) {
			case 'sun'	: return this.config.prefixes_sun;		   
			case 'smart': return this.config.prefixes_smart;
			case 'globe':return this.config.prefixes_globe;			    
			default: break;	   
		}		
	}
	this.config.prefixes_smart = ['813','907','908','909','910','912','918','919','920','921','928','929','930','938','939','946','947','948','949','989','998','999'];
	this.config.prefixes_globe =  ['817','905','906','915','916','917','926','927','935','936','937','994','996','997'];
	this.config.prefixes_sun =  ['922','923','925','932','933','934','942','943'];
};

window.phifix = new Phifix();


