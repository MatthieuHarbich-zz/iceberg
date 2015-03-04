// $(function(){

// 	Raphael.fn.MyRect = function( cx, cy, width, height ) {
// 		    var xLeftTop = cx - (width / 1);
// 		    var yLeftTop = cy - (height / 1);
// 		    this.rectObj = water.rect( xLeftTop, yLeftTop, width, height );
// 		    return this;
// 		};

// 		var iceberg = Raphael("iceberg", 2000, 2000);
// 		iceberg.setViewBox(0,0, 1000, 1000);

// 		iceberg.canvas.setAttribute('preserveAspectRatio', 'none');

// 		$('#iceberg').attr('width', 2000).attr('height', 2000);


		

		
// 		var q = '723.378,521.376 722.187,517.688 712.25,499.561 704.569,476.816 693.323,472.045 686.973,473.539 684.582,475.785 679.331,476.51 667.131,458.209 653.957,494.837 642.506,504.892 630.935,525.211 625.852,528.939 626.333,532.202 630.64,552.179 638.917,602.414 655.083,636.038 663.085,626.035 665.618,628.567 673.644,655.484 678.171,660.01 691.31,655.864 703.938,598.432 714.247,591.918 723.927,550.518 730.05,539.911 730.05,530.917';
// 		var w = '657.949,508.372 661.018,513.688 660.167,518.737 652.329,524.969 633.403,531.731 650.703,511.409 655.583,514.766';
// 		var e = '666.821,484.398 677.468,490.514 682.448,509.194 690.357,498.499 678.904,484.74 669.483,477.205';
// 		var r = '682.448,509.194 677.468,490.514 666.821,484.398 657.949,508.372 661.018,513.688 660.167,518.737 667.956,511.409 671.473,511.409 679.109,505.855';
// 		var t ="690.357,498.499 682.448,509.194 689.06,515.806 693.295,505.855 694.776,500.948";
// 		var z ="695.816,498.039 705.565,488.012 700.958,481.496 694.776,477.797 689.06,479.423 681.366,482.427 678.904,484.74 690.357,498.499 694.776,500.948";
// 		var u ="689.06,515.806 700.785,504.081 703.789,508.034 698.045,511.409 696.425,514.766 691.992,518.737";
		
// 		var i ="M666.968,528.532l0.988-9.794l3.517-7.328l7.636-5.555l3.339,3.339l-1.819,3.151l-1.682,7.707l2.419,6.276C676.135,527.133,671.271,527.874,666.968,528.532z";
// 		var o ="M682.448,509.194l-1.819,3.151l-1.682,7.707l2.419,6.276c7.772-1.146,22.958-3.417,32.077-3.59l-1.52-4l-8.135-10.703l-5.744,3.375l-1.62,3.356l-4.433,3.972L682.448,509.194z";

// 		var p="720.988,522.565 727.411,531.749 727.411,539.204 721.446,549.537 711.924,590.265 701.597,596.789 710.107,554.239 723.723,535.233 723.156,529.276";

// 		var a="M633.403,531.731c-3.089,0.015-4.472,0-4.472,0l-0.237-1.604l4.255-3.12l11.63-20.424l11.63-10.212l-5.508,15.039L633.403,531.731z";

// 		var s="655.583,514.766 669.483,477.205 667.841,464.032 656.21,496.37";

// 		var d="M667.956,511.409l-7.789,7.328l-7.837,6.232l-18.927,6.762c7.54,0,17.004-0.925,23.724-1.835l2.204-5.915L667.956,511.409z";

// 		var f="M703.789,508.034l4.827,0.338l3.862-2.905l7.274,13.269l1.236,3.827c-5.144,0.08-5.687,0.079-7.545,0.173c0.106-0.005-1.52-4-1.52-4L703.789,508.034z";

// 		var g="656.21,496.37 655.583,514.766 650.703,511.409";

// 		var h="657.126,529.896 659.331,523.981 667.956,511.409 671.473,511.409 667.956,518.737 666.968,528.532";

// 		var j="708.616,508.372 712.478,505.468 709.824,500.625 705.565,488.012 695.816,498.039 694.776,500.948 693.295,505.855 689.06,515.806 700.785,504.081 703.789,508.034";

// 		var k="M628.931,531.731l4.302,19.955l13.662-6.032l6.762-6.45l3.469-9.308C644.112,531.236,641.673,531.688,628.931,531.731z";

// 		var l="646.896,545.654 644.199,588.001 647.21,609.881 655.643,631.113 641.46,601.611 633.233,551.686";

// 		var y="666.99,616.929 665.668,583.752 653.457,575.608 645.605,565.911 644.199,588.001 647.21,609.881 655.643,631.113";

// 		var x="649.97,560.385 653.657,539.204 646.896,545.654 645.605,565.911 653.457,575.608 665.668,583.752";

// 		var c="M666.968,528.532l-14.989,20.314l1.679-9.642l3.469-9.308C666.968,528.532,666.968,528.532,666.968,528.532z";

// 		var v="M659.473,538.689l22.433-2.361l5.897-4.035l10.552-2.483l7.21-6.589c-12.896,1.494-32.432,3.946-38.597,5.311L659.473,538.689z";

// 		var b="M723.156,529.276l-13.628-0.744l-9.036,5.313l-14.716,4.844l-3.87-2.361l5.897-4.035l10.552-2.483l7.21-6.589c7.879-0.483,12.608-0.829,15.424-0.656L723.156,529.276z";

// 		var n="681.366,565.911 679.109,590.832 665.668,583.752 649.97,560.385 651.979,548.846 659.473,538.689 681.906,536.328 685.776,538.689 696.195,541.645 687.493,555.941 675.982,547.573";

// 		var m="664.945,619.486 669.682,627.691 678.904,657.011 675.982,654.09 667.956,627.174 662.866,622.084";

// 		var qw="M665.668,583.752l13.441,7.08l-0.205,66.179l-9.222-29.32l-4.737-8.206c0,0,2.079-1.711,2.045-2.556C666.956,616.084,665.668,583.752,665.668,583.752z";

// 		var we="681.366,565.911 685.776,590.832 678.904,657.011 679.109,590.832";

// 		var er="675.982,547.573 687.493,555.941 693.295,601.812 678.904,657.011 685.776,590.832 681.366,565.911";

// 		var rt="685.776,538.689 700.492,533.845 709.528,528.532 723.156,529.276 723.723,535.233 704.731,541.645 700.492,548.988 687.493,555.941 696.195,541.645";

// 		var tz="678.904,657.011 689.06,653.806 701.597,596.789 710.107,554.239 723.723,535.233 704.731,541.645 700.492,548.988 687.493,555.941 693.295,601.812";

// 		var zu="681.366,482.427 689.06,479.423 694.776,477.797 700.958,481.496 705.565,488.012 702.448,478.783 693.087,474.812 688.265,475.946";

// 		var ui="669.483,477.205 678.904,484.74 685.776,478.284 678.053,479.35 667.841,464.032";
		

// 		var q = q.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M'); 
// 		var w = w.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var e = e.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var r = r.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var t = t.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var z = z.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var u = u.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');

// 		var p = p.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M'); 
// 		var s = s.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var g = g.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var h = h.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var j = j.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var l = l.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var y = y.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');

// 		var x = x.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M'); 
// 		var n = n.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var m = m.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var we = we.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var er = er.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var rt = rt.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var tz = tz.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');

// 		var zu = zu.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');
// 		var ui = ui.replace(/([0-9.]+),([0-9.]+)/g, function($0, x, y) { return 'L ' + Math.floor(x) + ',' + Math.floor(y) + ' ';}).replace(/^L/, 'M');

// 		var q = iceberg.path(q);
// 		var w = iceberg.path(w);
// 		var e = iceberg.path(e);
// 		var r = iceberg.path(r);
// 		var t = iceberg.path(t);
// 		var z = iceberg.path(z);
// 		var u = iceberg.path(u);
// 		var i = iceberg.path(i);
// 		var o = iceberg.path(o);
// 		var p = iceberg.path(p);
// 		var a = iceberg.path(a);
// 		var s = iceberg.path(s);
// 		var d = iceberg.path(d);
// 		var f = iceberg.path(f);
// 		var g = iceberg.path(g);
// 		var h = iceberg.path(h);
// 		var j = iceberg.path(j);
// 		var k = iceberg.path(k);
// 		var l = iceberg.path(l);
// 		var y = iceberg.path(y);
// 		var x = iceberg.path(x);
// 		var c = iceberg.path(c);
// 		var v = iceberg.path(v);
// 		var b = iceberg.path(b);
// 		var n = iceberg.path(n);
// 		var m = iceberg.path(m);
// 		var qw = iceberg.path(qw);
// 		var we = iceberg.path(we);
// 		var er = iceberg.path(er);
// 		var rt = iceberg.path(rt);
// 		var tz = iceberg.path(tz);
// 		var zu = iceberg.path(zu);
// 		var ui = iceberg.path(ui);


// 		q.attr({
// 			// "stroke":"grey",
// 			"stroke-width":0,
// 			"fill":"#0A302F"
// 		});

// 		w.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#BCBEC0"
// 		});

// 		e.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#BCBEC0"
// 		});

// 		r.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#D1D3D4"
// 		});

// 		t.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#A7A9AC"
// 		});

// 		z.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#D1D3D4"
// 		});

// 		u.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#D1D3D4"
// 		});

// 		i.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#D1D3D4"
// 		});

// 		o.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#BCBEC0"
// 		});

// 		p.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#406C7B"
// 		});

// 		a.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#FFFFFF"
// 		});

// 		s.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#FFFFFF"
// 		});

// 		d.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#FFFFFF"
// 		});

// 		f.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#FFFFFF"
// 		});

// 		g.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#E6E7E8"
// 		});

// 		h.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#E6E7E8"
// 		});

// 		j.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#E6E7E8"
// 		});

// 		k.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#E5EEF4"
// 		});

// 		l.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#BFD9E7"
// 		});

// 		y.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#406C7B"
// 		});

// 		x.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#5FA0B6"
// 		});

// 		c.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#BFD9E7"
// 		});

// 		v.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#5FA0B6"
// 		});

// 		b.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#E5EEF4"
// 		});

// 		n.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#2A3C4F"
// 		});

// 		m.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#BFD9E7"
// 		});

// 		qw.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#5FA0B6"
// 		});

// 		we.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#4E6E70"
// 		});
// 		er.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#406C7B"
// 		});
// 		rt.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#5FA0B6"
// 		});
// 		tz.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#2A3C4F"
// 		});
// 		zu.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#FFFFFF"
// 		});
// 		ui.attr({
// 			// "stroke":"green",
// 			"stroke-width":0,
// 			"fill":"#E6E7E8"
// 		});






		
// 		// var water = Raphael("water", 2000, 2000);

// 		// var e = "M-1087,266.444c0,0,8-56.778,140-21.111S-931,281-815,281s88-5.111,144-14.556c56-9.444,48-16.88,132-9.162C-455,265-351,261-259,281s84-12,140,0s116-21.111,152-14.556C69,273,61,238.5,165,287.75S257,329,333,325s132-12,160-24s88.763-20.37,118.382-20.185s111.373,2.312,158.496,23.249S793,309,857,309s116-32.37,152-28.185s36-12.185,116,0s90-4.185,155,0s73,3.815,129,0s84-28.926,144-14.371c60,14.556,68,2.186,128,14.371S1809,309,1853,309s52-40.37,104-28.185S2085,281,2113,301s104,26.131,172,27.066s88,23.066,124,0S2461,301,2509,305s76,7.056,132,33.528S2693,465,2705,625s-44,368-64,420s-740,136-1040,176s-1128,56-1352,60s-556-36-756-100s-556-416-580-484S-1087,266.444-1087,266.444z";

// 		// var wat = water.path(e);

// 		// wat.attr({
// 		// 	"stroke":"blue",
// 		// 	"fill":"blue",
// 		// 	"opacity":0.5
// 		// })
	
// });