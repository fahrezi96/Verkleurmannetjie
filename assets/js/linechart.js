// set the dimensions and margins of the graph
var marginForLine = { top: 10, right: 30, bottom: 30, left: 60 },
    widthForLine = 460 - marginForLine.left - marginForLine.right,
    heightForLine = 400 - marginForLine.top - marginForLine.bottom;
// append the svg object to the body of the page
var svgForLine = d3.select("#linechart")
    .append("svg")
    .attr("width", widthForLine + marginForLine.left + marginForLine.right)
    .attr("height", heightForLine + marginForLine.top + marginForLine.bottom)
    .append("g")
    .attr("transform",
        "translate(" + marginForLine.left + "," + marginForLine.top + ")");
//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/connectedscatter.csv",
    // When reading the csv, I must format variables:
    function (d) {
        return { date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value }
    },
    // Now I can use this dataset:
    function (data) {
        // Add X axis --> it is a date format
        var xForLine = d3.scaleTime()
            .domain(d3.extent(data, function (d) { return d.date; }))
            .range([0, widthForLine]);
        svgForLine.append("g")
            .attr("transform", "translate(0," + heightForLine + ")")
            .call(d3.axisBottom(xForLine));
        // Add Y axis
        var yForLine = d3.scaleLinear()
            .domain([8000, 9200])
            .range([heightForLine, 0]);
        svgForLine.append("g")
            .call(d3.axisLeft(yForLine));
        // Add the line
        svgForLine.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#111111")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(function (d) { return xForLine(d.date) })
                .y(function (d) { return yForLine(d.value) })
            )
        // Add the points
        svgForLine
            .append("g")
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return xForLine(d.date) })
            .attr("cy", function (d) { return yForLine(d.value) })
            .attr("r", 5)
            .attr("fill", "#111111")
    })