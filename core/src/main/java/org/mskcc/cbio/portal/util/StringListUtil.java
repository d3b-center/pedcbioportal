/*
 * Copyright (c) 2015 Memorial Sloan-Kettering Cancer Center.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS
 * FOR A PARTICULAR PURPOSE. The software and documentation provided hereunder
 * is on an "as is" basis, and Memorial Sloan-Kettering Cancer Center has no
 * obligations to provide maintenance, support, updates, enhancements or
 * modifications. In no event shall Memorial Sloan-Kettering Cancer Center be
 * liable to any party for direct, indirect, special, incidental or
 * consequential damages, including lost profits, arising out of the use of this
 * software and its documentation, even if Memorial Sloan-Kettering Cancer
 * Center has been advised of the possibility of such damage.
 */

/*
 * This file is part of cBioPortal.
 *
 * cBioPortal is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

package org.mskcc.cbio.portal.util;

import java.util.ArrayList;

/**
 * Misc. Utilities for Working with Lists of Items and Converting them to Strings.
 */
public class StringListUtil {
    private static final String COMMA = ", ";
    private static final String PERIOD = ".";

    /**
     * Converts a List of Items into a sentence with commas and periods.
     * For example, the following list of items: apple banana orange
     * is converted into: "apple, banana, organge."
     *
     * @param items List of Items.
     * @return Sentence of Items.
     */
    public static String covertItemsIntoSentence (ArrayList<String> items) {
        StringBuffer str = new StringBuffer();
        for (int i = 0; i < items.size(); i++) {
            String item = items.get(i);
            str.append(item);
            str.append(getDelimeter(i, items));
        }
        return str.toString();
    }

    private static String getDelimeter(int i, ArrayList<String> items) {
        if (i < items.size() - 1) {
            return COMMA;
        } else {
            return PERIOD;
        }
    }

}
