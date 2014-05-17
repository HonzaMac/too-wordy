var complexityRegex = /\b(a number of|abundance|accede to|accelerate|accentuate|accompany|accomplish|accorded|accrue|acquiesce|acquire|additional|adjacent to|adjustment|admissible|advantageous|adversely impact|advise|aforementioned|aggregate|aircraft|all of|alleviate|allocate|along the lines of|already existing|alternatively|ameliorate|anticipate|apparent|appreciable|as a means of|as of yet|as to|as yet|ascertain|assistance|at this time|attain|attributable to|authorize|because of the fact that|belated|benefit from|bestow|by virtue of|cease|close proximity|commence|comply with|concerning|consequently|consolidate|constitutes|demonstrate|depart|designate|discontinue|due to the fact that|each and every|economical|eliminate|elucidate|employ|endeavor|enumerate|equitable|equivalent|evaluate|evidenced|exclusively|expedite|expend|expiration|facilitate|factual evidence|feasible|finalize|first and foremost|for the purpose of|forfeit|formulate|honest truth|however|if and when|impacted|implement|in a timely manner|in accordance with|in addition|in all likelihood|in an effort to|in between|in excess of|in lieu of|in light of the fact that|in many cases|in order to|in regard to|in some instances|in terms of|in the near future|in the process of|inception|incumbent upon|indicate|indication|initiate|is applicable to|is authorized to|is responsible for|it is essential|magnitude|maximum|methodology|minimize|minimum|modify|monitor|multiple|necessitate|nevertheless|not certain|not many|not often|not unless|not unlike|notwithstanding|null and void|numerous|objective|obligate|obtain|on the contrary|on the other hand|one particular|optimum|overall|owing to the fact that|participate|particulars|pass away|pertaining to|point in time|portion|possess|preclude|previously|prior to|prioritize|procure|proficiency|provided that|purchase|put simply|readily apparent|refer back|regarding|relocate|remainder|remuneration|require|requirement|reside|residence|retain|satisfy|shall|should you wish|similar to|solicit|span across|strategize|subsequent|substantial|successfully complete|sufficient|terminate|the month of|therefore|time period|took advantage of|transmit|transpire|until such time as|utilization|utilize|validate|various different|very|whether or not|with respect to|with the exception of|witnessed)\b/gi;
var matcher = require("./matcher");

module.exports = function(text) {
  return matcher(complexityRegex, text, "complexity");
};