<?xml version="1.0" encoding="ISO-8859-1"?>
<!-- Edited by XMLSpy® -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="channel">
    <xsl:for-each select="item[position() &lt;20]">
     <xsl:sort data-type="date" select="pubDate" order="descending"/>
     
     <div class='parent_box'>
       
        <div class="box-header">
        <a>
            <xsl:attribute name="href">
            <xsl:value-of select="normalize-space(link)"/>
            </xsl:attribute>
            <xsl:attribute name="target">
                _blank
            </xsl:attribute>
            <h3><xsl:value-of disable-output-escaping="yes" select='title'/></h3>
            <div class="pubDate"> <xsl:value-of select="pubDate"/> </div>
        </a>
        </div>
        <div class='box'>
            <xsl:value-of disable-output-escaping="yes" select="description"/>
        </div>
    </div>
    

</xsl:for-each>
</xsl:template>
</xsl:stylesheet>
